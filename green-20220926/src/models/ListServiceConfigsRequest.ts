// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The classification.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  /**
   * @remarks
   * The protection type. Valid values:
   * 
   * - modelProtection: model protection.
   * 
   * - agentRealtimeProtection: agent real-time protection.
   * 
   * - agentBehaviorAudit: agent behavior audit.
   * 
   * @example
   * modelProtection
   */
  protectionType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * The usage status.
   * 
   * @example
   * in
   */
  useStatus?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      protectionType: 'ProtectionType',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      useStatus: 'UseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      protectionType: 'string',
      regionId: 'string',
      resourceType: 'string',
      useStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

