import * as $dara from '@darabonba/typescript';
import { AppInstanceProfile } from "./AppInstanceProfile";
export declare class AppInstance extends $dara.Model {
    appSubType?: string;
    appType?: string;
    bizId?: string;
    buildType?: string;
    deleted?: number;
    description?: string;
    designSpecBizId?: string;
    designSpecId?: string;
    domain?: string;
    endTime?: string;
    espBizId?: string;
    gmtCreate?: string;
    gmtDelete?: string;
    gmtModified?: string;
    gmtPublish?: string;
    iconUrl?: string;
    name?: string;
    profile?: AppInstanceProfile;
    siteHost?: string;
    slug?: string;
    sourceType?: string;
    startTime?: string;
    /**
     * @remarks
     * trial,draft,live,refunded,expired,released
     */
    status?: string;
    statusText?: string;
    thumbnailUrl?: string;
    userId?: string;
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
