import * as $dara from '@darabonba/typescript';
export declare class DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting extends $dara.Model {
    endDate?: string;
    isTop?: string;
    noticeBarContent?: string;
    poppedUpButtonText?: string;
    poppedUpButtonType?: string;
    poppedUpButtonUrl?: string;
    poppedUpContent?: string;
    resourceNiche?: string;
    startDate?: string;
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
export declare class DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings extends $dara.Model {
    rdsInstanceResourceSetting?: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting[];
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
export declare class DescribeRdsResourceSettingsResponseBody extends $dara.Model {
    rdsInstanceResourceSettings?: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 76364A52-E0AB-5CC8-xxxx-CF1DC482C092
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
