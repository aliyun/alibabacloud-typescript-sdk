// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlertSceneByEventResponseBodyDataTargets } from "./DescribeAlertSceneByEventResponseBodyDataTargets";


export class DescribeAlertSceneByEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alert name. The display name of the alert name varies based on the language of the system, such as Chinese and English.
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
   * The alert title. The display name of the alert title varies based on the language of the system, such as Chinese and English.
   * 
   * @example
   * Unusual Logon-login_common_ip
   */
  alertTile?: string;
  /**
   * @remarks
   * The ID of the alert title.
   * 
   * @example
   * Unusual Logon-login_common_ip
   */
  alertTileId?: string;
  /**
   * @remarks
   * The alert type. The display name of the alert type varies based on the language of the system, such as Chinese and English.
   * 
   * @example
   * Unusual Logon
   */
  alertType?: string;
  /**
   * @remarks
   * The ID of the alert type.
   * 
   * @example
   * Unusual Logon
   */
  alertTypeId?: string;
  /**
   * @remarks
   * The objects that can be added to the whitelist.
   * 
   * @example
   * [{"Type": "host_uuid","Value": "441862da-a539-4cc0-a00d-473955826881","Values": ["441862da-a539-4cc0-a00d-473955826881"],"Name": "${aliyun.siem.entity.host_uuid}"}]
   */
  targets?: DescribeAlertSceneByEventResponseBodyDataTargets[];
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
      targets: { 'type': 'array', 'itemType': DescribeAlertSceneByEventResponseBodyDataTargets },
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

