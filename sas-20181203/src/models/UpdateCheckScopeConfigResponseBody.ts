// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckScopeConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The automatic scan configuration as a JSON string. The following fields are included:
   * 
   * - **autoInclude**: specifies whether to enable automatic scan. Valid values: **true**: enabled. **false**: disabled.
   * - **autoRule**: the enablement configuration.
   * - **ruleOperator**: the enablement configuration rule. Set the value to **include**.
   * - **operator**: the logical operator. Set the value to **or**.
   * - **rule**: the rule.
   * - **condition**: the rule condition. Valid values: **vendor**: vendor. **assetType**: level-1 asset type. **assetSubType**: level-2 asset type.
   * > For more information, refer to the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation.
   * 
   * @example
   * "{\\"autoInclude\\":true,\\"autoRule\\":{\\"ruleOperator\\":\\"include\\",\\"operator\\":\\"or\\",\\"rule\\":[{\\"condition\\":\\"assetSubType\\",\\"ruleOperator\\":\\"include\\",\\"value\\":[{\\"vendor\\":\\"0\\",\\"assetType\\":\\"0\\",\\"assetSubType\\":\\"100\\"}]}]}}"
   */
  autoConfig?: string;
  /**
   * @remarks
   * The automatic scan configuration type. Valid values:
   * - **0**: disable automatic scan
   * - **1**: automatically scan newly added cloud assets
   * 
   * @example
   * 1
   */
  autoType?: number;
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 97a1fed216908e417407344e1505xxxx
   */
  configId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-10-16 18:17:16
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-04-09 18:56:15
   */
  gmtModified?: string;
  /**
   * @remarks
   * The scan scope configuration type. Valid values:
   * - **1**: scan by instance
   * - **3**: scan all
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      autoConfig: 'AutoConfig',
      autoType: 'AutoType',
      configId: 'ConfigId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfig: 'string',
      autoType: 'number',
      configId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCheckScopeConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateCheckScopeConfigResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 676F80E3-4B3F-43DA-9CBB-5FF79F202AA2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateCheckScopeConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

