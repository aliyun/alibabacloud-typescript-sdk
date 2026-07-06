// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclResourceNameRequest extends $dara.Model {
  /**
   * @remarks
   * Matching pattern. Valid values:
   * 
   * - LITERAL: exact match
   * 
   * - PREFIXED: prefix match
   * 
   * This parameter is required.
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * - **Topic**: message topic.
   * 
   * - **Group**: consumer group.
   * 
   * - **Cluster**: instance.
   * 
   * - **TransactionalId**: transaction ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  aclResourceType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

