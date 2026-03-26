// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResultInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResult extends $dara.Model {
  amount?: number;
  errorCode?: string;
  errorMsg?: string;
  instanceIds?: CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResultInstanceIds;
  instanceType?: string;
  spotStrategy?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      instanceIds: 'InstanceIds',
      instanceType: 'InstanceType',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      instanceIds: CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResultInstanceIds,
      instanceType: 'string',
      spotStrategy: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupResponseBodyLaunchResults extends $dara.Model {
  launchResult?: CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResult[];
  static names(): { [key: string]: string } {
    return {
      launchResult: 'LaunchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchResult: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResult },
    };
  }

  validate() {
    if(Array.isArray(this.launchResult)) {
      $dara.Model.validateArray(this.launchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the auto provisioning group.
   * 
   * @example
   * apg-sn54avj8htgvtyh8****
   */
  autoProvisioningGroupId?: string;
  launchResults?: CreateAutoProvisioningGroupResponseBodyLaunchResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 745CEC9F-0DD7-4451-9FE7-8B752F39****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      launchResults: 'LaunchResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupId: 'string',
      launchResults: CreateAutoProvisioningGroupResponseBodyLaunchResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.launchResults && typeof (this.launchResults as any).validate === 'function') {
      (this.launchResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

