// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCollectorRequestConfigs extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * This parameter is required.
   * 
   * @example
   * "filebeat.inputs:xxx"
   */
  content?: string;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * filebeat.yml
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectorRequest extends $dara.Model {
  /**
   * @remarks
   * The collection paths of fileBeat. This parameter is required only when the collector is deployed on ECS instances.
   */
  collectorPaths?: string[];
  /**
   * @remarks
   * The configuration file information of the collector.
   * 
   * This parameter is required.
   */
  configs?: CreateCollectorRequestConfigs[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run without performing the actual request. This parameter is used only when you create or update a collector. Valid values:
   * 
   * - true: performs only a dry run without creating or updating the collector.
   * - false: performs a dry run and sends the request.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended configurations of the collector.
   * 
   * This parameter is required.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * The name of the collector. The name must be 1 to 30 characters in length, start with an uppercase or lowercase letter, and can contain letters, digits, underscores (_), or hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ct-test
   */
  name?: string;
  /**
   * @remarks
   * The type of the collector. Valid values: fileBeat, metricBeat, heartBeat, and auditBeat.
   * 
   * This parameter is required.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The version of the collector. Valid values:
   * - ECS-based deployment: 6.8.5_with_community
   * - ACK-based deployment: 6.8.13_with_community.
   * 
   * This parameter is required.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the collector resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp12nu14urf0upaf*****
   */
  vpcId?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      name: 'name',
      resType: 'resType',
      resVersion: 'resVersion',
      vpcId: 'vpcId',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': CreateCollectorRequestConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      name: 'string',
      resType: 'string',
      resVersion: 'string',
      vpcId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.collectorPaths)) {
      $dara.Model.validateArray(this.collectorPaths);
    }
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

