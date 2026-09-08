// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmsMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The value ranges from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The value ranges from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the scenario. Valid values:
   * 
   * - SATISFACTION_SURVEY: satisfaction survey
   * 
   * - CONTACT_FLOW_NODE: Interactive Voice Response (IVR) flow node
   * 
   * - MISSED_CALL_NOTIFICATION: missed call notification
   * 
   * - FLASH_SMS: Alibaba Cloud flash SMS notification
   * 
   * @example
   * ["SATISFACTION_SURVEY","CONTACT_FLOW_NODE"]
   */
  scenarioListJson?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scenarioListJson: 'ScenarioListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scenarioListJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

