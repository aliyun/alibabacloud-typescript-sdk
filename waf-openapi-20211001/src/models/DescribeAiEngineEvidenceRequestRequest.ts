// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEvidenceRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EVT-20241025-109
   */
  eventId?: string;
  /**
   * @remarks
   * The evidence ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EVD-20241025-001
   */
  evidenceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-sssde*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The response language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The region where the WAF instance resides.
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
   * rg-demo****
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      evidenceId: 'EvidenceId',
      instanceId: 'InstanceId',
      language: 'Language',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      evidenceId: 'string',
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

