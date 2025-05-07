// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The action-related parameters. You can add action-related parameters based on your business requirements. The parameter value varies with the value of the TaskAction parameter.
   * 
   * @example
   * {\\"recoverTime\\":\\"2023-04-17T14:02:35Z\\",\\"recoverMode\\":\\"timePoint\\"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The event handling action. Valid values:
   * 
   * *   **archive**
   * *   **undo**
   * 
   * >  This parameter is required.
   * 
   * @example
   * archive
   */
  eventAction?: string;
  /**
   * @remarks
   * The event ID. You can call the DescribeEvents operation to obtain the IDs of the events. Separate multiple event IDs with commas (,). You can specify up to 20 event IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 5422964
   */
  eventId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      actionParams: 'ActionParams',
      eventAction: 'EventAction',
      eventId: 'EventId',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionParams: 'string',
      eventAction: 'string',
      eventId: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

