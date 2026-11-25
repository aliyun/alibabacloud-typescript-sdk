import * as $dara from '@darabonba/typescript';
export declare class CreateAppNotificationSceneRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The list of mobile butler delivery platform types in a JSON string array. Supported values include wechat, dingtalk, wecom, and feishu.
     *
     * @example
     * ["feishu"]
     */
    butlerChannelTypesJson?: string;
    /**
     * @remarks
     * The list of mobile butler notification fields. The value is a JSON string array. This parameter is required when the butler channel is selected. A maximum of 10 fields are supported.
     * Butler field JSON.
     *
     * @example
     * ["id","phone","name","city","message","is_deleted","updated_at","created_at","status","budget"]
     */
    butlerFieldsJson?: string;
    /**
     * @remarks
     * The notification channels in a JSON array string, such as ["sms","email"].
     *
     * @example
     * ["sms","email"]
     */
    channelsJson?: string;
    /**
     * @remarks
     * The scenario description.
     *
     * @example
     * cn_graph_prod
     */
    description?: string;
    /**
     * @remarks
     * The email notification fields in a JSON array string. A maximum of 10 fields are supported.
     *
     * @example
     * {}
     */
    emailFieldsJson?: string;
    /**
     * @remarks
     * The email sending limits. The value is a JSON string that contains the minInterval and dailyLimit fields.
     *
     * @example
     * {}
     */
    emailLimitJson?: string;
    /**
     * @remarks
     * The list of email recipient IDs in a JSON array string.
     *
     * @example
     * {}
     */
    emailRecipientIdsJson?: string;
    /**
     * @remarks
     * The scenario name.
     *
     * @example
     * Device Capability Manual
     */
    name?: string;
    /**
     * @remarks
     * The list of SMS recipient IDs in a JSON array string.
     *
     * @example
     * {}
     */
    phoneRecipientIdsJson?: string;
    /**
     * @remarks
     * The SMS notification fields in a JSON array string. A maximum of 3 fields are supported.
     *
     * @example
     * {}
     */
    smsFieldsJson?: string;
    /**
     * @remarks
     * The SMS sending limits. The value is a JSON string that contains the minInterval and dailyLimit fields.
     *
     * @example
     * {}
     */
    smsLimitJson?: string;
    /**
     * @remarks
     * The name of the monitored data table.
     *
     * @example
     * default.ai_advertising_material_rec_train_v1103
     */
    tableName?: string;
    /**
     * @remarks
     * The trigger events in a JSON array string, such as ["INSERT","UPDATE","DELETE"].
     *
     * @example
     * ["INSERT","UPDATE","DELETE"]
     */
    triggerEventsJson?: string;
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
