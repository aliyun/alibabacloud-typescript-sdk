// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceConfigurationSampleResponseBodySample extends $dara.Model {
  /**
   * @example
   * 10093xxxx
   */
  accountId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  availabilityZone?: string;
  configuration?: string;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * 1646362560000
   */
  resourceCreationTime?: string;
  /**
   * @example
   * 1
   */
  resourceDeleted?: string;
  /**
   * @example
   * i-bp1aaegapahkh880x4wq
   */
  resourceId?: string;
  /**
   * @example
   * my-ecs
   */
  resourceName?: string;
  /**
   * @example
   * Running
   */
  resourceStatus?: string;
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @example
   * {\\"key\\":\\"value\\"}
   */
  tags?: string;
  /**
   * @example
   * 5
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      configuration: 'Configuration',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      availabilityZone: 'string',
      configuration: 'string',
      region: 'string',
      resourceCreationTime: 'string',
      resourceDeleted: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationSampleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DC300244-FCE3-5061-8214-C27ECB668487
   */
  requestId?: string;
  sample?: GetResourceConfigurationSampleResponseBodySample;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sample: 'Sample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sample: GetResourceConfigurationSampleResponseBodySample,
    };
  }

  validate() {
    if(this.sample && typeof (this.sample as any).validate === 'function') {
      (this.sample as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

