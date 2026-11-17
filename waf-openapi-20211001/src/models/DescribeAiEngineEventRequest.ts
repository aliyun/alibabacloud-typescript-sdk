// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEventRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EVT-0bda6****6b5cwwz
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_dddsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The region ID of the WAF instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-****mo
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
      language: 'Language',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
      language: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

