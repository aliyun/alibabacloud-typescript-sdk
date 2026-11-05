import * as $dara from '@darabonba/typescript';
export declare class DescribeDirectoriesRequest extends $dara.Model {
    /**
     * @remarks
     * The client ID. The system generates a unique ID for each client.
     *
     * This parameter is required.
     *
     * @example
     * 54c17e1d-2d72-4b87-aa33-25f3b3f2****
     */
    clientId?: string;
    /**
     * @remarks
     * The directory IDs.
     */
    directoryId?: string[];
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
