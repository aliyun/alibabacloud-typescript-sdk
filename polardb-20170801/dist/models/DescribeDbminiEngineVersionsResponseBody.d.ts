import * as $dara from '@darabonba/typescript';
export declare class DescribeDBMiniEngineVersionsResponseBodyDBRevisionVersionList extends $dara.Model {
    /**
     * @remarks
     * The release notes of the version.
     *
     * @example
     * ReleaseNote
     */
    releaseNote?: string;
    /**
     * @remarks
     * The release state of the database version. Valid values:
     *
     * - **Stable**: The version is stable.
     *
     * - **Old**: The version is outdated. Upgrading to this version is not recommended.
     *
     * - **HighRisk**: The version has a critical bug. Upgrading to this version is not recommended.
     *
     * - **Beta**: The version is a beta version.
     *
     * @example
     * Stable
     */
    releaseType?: string;
    /**
     * @remarks
     * The code of the database engine revision version. Use this code to specify the target version for an upgrade.
     *
     * @example
     * 20230707
     */
    revisionVersionCode?: string;
    /**
     * @remarks
     * The number of the database engine revision version.
     *
     * @example
     * 8.0.1.1.35.1
     */
    revisionVersionName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBMiniEngineVersionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * A list of information about the versions available for an upgrade.
     */
    DBRevisionVersionList?: DescribeDBMiniEngineVersionsResponseBodyDBRevisionVersionList[];
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 2921D843-433A-5FB3-A03B-4EC093B219F8
     */
    requestId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
