// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTerraformStateDetectionResponseBodyJobChangedResourcesAttributeChanges extends $dara.Model {
  /**
   * @example
   * vpc_name
   */
  attributePath?: string;
  /**
   * @example
   * test_remote
   */
  remoteValue?: string;
  /**
   * @example
   * test_hcl
   */
  templateValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributePath: 'attributePath',
      remoteValue: 'remoteValue',
      templateValue: 'templateValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributePath: 'string',
      remoteValue: 'string',
      templateValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTerraformStateDetectionResponseBodyJobChangedResources extends $dara.Model {
  attributeChanges?: GetTerraformStateDetectionResponseBodyJobChangedResourcesAttributeChanges[];
  /**
   * @example
   * create
   */
  changedType?: string;
  /**
   * @example
   * false
   */
  hasDrift?: boolean;
  /**
   * @example
   * vpc-axxxxx
   */
  resourceId?: string;
  /**
   * @example
   * vpc:alicloud_vpc.default
   */
  resourceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      attributeChanges: 'attributeChanges',
      changedType: 'changedType',
      hasDrift: 'hasDrift',
      resourceId: 'resourceId',
      resourceIdentifier: 'resourceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeChanges: { 'type': 'array', 'itemType': GetTerraformStateDetectionResponseBodyJobChangedResourcesAttributeChanges },
      changedType: 'string',
      hasDrift: 'boolean',
      resourceId: 'string',
      resourceIdentifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeChanges)) {
      $dara.Model.validateArray(this.attributeChanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTerraformStateDetectionResponseBodyJobDriftedResourcesAttributeDrifts extends $dara.Model {
  /**
   * @example
   * vpc_name
   */
  attributePath?: string;
  /**
   * @example
   * test_remote
   */
  remoteValue?: string;
  /**
   * @example
   * test_state
   */
  stateValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributePath: 'attributePath',
      remoteValue: 'remoteValue',
      stateValue: 'stateValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributePath: 'string',
      remoteValue: 'string',
      stateValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTerraformStateDetectionResponseBodyJobDriftedResources extends $dara.Model {
  attributeDrifts?: GetTerraformStateDetectionResponseBodyJobDriftedResourcesAttributeDrifts[];
  /**
   * @example
   * update
   */
  driftedType?: string;
  /**
   * @example
   * vpc-bxxxxx
   */
  resourceId?: string;
  /**
   * @example
   * vpc:alicloud_vpc.default2
   */
  resourceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      attributeDrifts: 'attributeDrifts',
      driftedType: 'driftedType',
      resourceId: 'resourceId',
      resourceIdentifier: 'resourceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeDrifts: { 'type': 'array', 'itemType': GetTerraformStateDetectionResponseBodyJobDriftedResourcesAttributeDrifts },
      driftedType: 'string',
      resourceId: 'string',
      resourceIdentifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeDrifts)) {
      $dara.Model.validateArray(this.attributeDrifts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTerraformStateDetectionResponseBodyJob extends $dara.Model {
  changedResources?: GetTerraformStateDetectionResponseBodyJobChangedResources[];
  driftedResources?: GetTerraformStateDetectionResponseBodyJobDriftedResources[];
  /**
   * @example
   * planned failed
   */
  errorMessage?: string;
  /**
   * @example
   * stack-as181axxxxxx:development_xxxx
   */
  identifier?: string;
  /**
   * @example
   * Errored
   */
  status?: string;
  /**
   * @example
   * Stack
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      changedResources: 'changedResources',
      driftedResources: 'driftedResources',
      errorMessage: 'errorMessage',
      identifier: 'identifier',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changedResources: { 'type': 'array', 'itemType': GetTerraformStateDetectionResponseBodyJobChangedResources },
      driftedResources: { 'type': 'array', 'itemType': GetTerraformStateDetectionResponseBodyJobDriftedResources },
      errorMessage: 'string',
      identifier: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changedResources)) {
      $dara.Model.validateArray(this.changedResources);
    }
    if(Array.isArray(this.driftedResources)) {
      $dara.Model.validateArray(this.driftedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTerraformStateDetectionResponseBody extends $dara.Model {
  job?: GetTerraformStateDetectionResponseBodyJob;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B6ED9F71-7FA8-598E-B64D-4606FB3FCCC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'job',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetTerraformStateDetectionResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

