// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertSceneResponseBodyDataTargets extends $dara.Model {
  /**
   * @remarks
   * The display name of the attribute for the entity.
   * 
   * @example
   * HOST UUID
   */
  name?: string;
  /**
   * @remarks
   * The attribute of the entity.
   * 
   * @example
   * host_uuid
   */
  type?: string;
  /**
   * @remarks
   * The right operand that is displayed by default in the whitelist rule.
   * 
   * @example
   * 441862da-a539-4cc0-a00d-47395582****
   */
  value?: string;
  /**
   * @remarks
   * The right operands supported by the whitelist rule.
   * 
   * @example
   * ["441862da-a539-4cc0-a00d-473955826881"]
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the alert. The value varies based on the display language (Chinese or English) of the Security Center console.
   * 
   * @example
   * login_common_ip
   */
  alertName?: string;
  /**
   * @remarks
   * The ID of the alert name.
   * 
   * @example
   * login_common_ip
   */
  alertNameId?: string;
  /**
   * @remarks
   * The title of the alert notification. The value varies based on the display language (Chinese or English) of the Security Center console.
   * 
   * @example
   * unusual login-login_common_ip
   */
  alertTile?: string;
  /**
   * @remarks
   * The ID of the alert title.
   * 
   * @example
   * unusual login-login_common_ip
   */
  alertTileId?: string;
  /**
   * @remarks
   * The type of the alert. The value varies based on the display language (Chinese or English) of the Security Center console.
   * 
   * @example
   * unusual login
   */
  alertType?: string;
  /**
   * @remarks
   * The ID of the alert type.
   * 
   * @example
   * unusual login
   */
  alertTypeId?: string;
  /**
   * @remarks
   * The information about the entities for which you need to add the alert to the whitelist.
   * 
   * @example
   * [{"Type": "host_uuid","Value": "441862da-a539-4cc0-a00d-473955826881","Values": ["441862da-a539-4cc0-a00d-473955826881"],"Name": "${aliyun.siem.entity.host_uuid}"}]
   */
  targets?: DescribeAlertSceneResponseBodyDataTargets[];
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertNameId: 'AlertNameId',
      alertTile: 'AlertTile',
      alertTileId: 'AlertTileId',
      alertType: 'AlertType',
      alertTypeId: 'AlertTypeId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertNameId: 'string',
      alertTile: 'string',
      alertTileId: 'string',
      alertType: 'string',
      alertTypeId: 'string',
      targets: { 'type': 'array', 'itemType': DescribeAlertSceneResponseBodyDataTargets },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertSceneResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertSceneResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

