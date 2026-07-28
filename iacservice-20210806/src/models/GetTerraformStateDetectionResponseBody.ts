// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTerraformStateDetectionResponseBodyJobChangedResourcesAttributeChanges extends $dara.Model {
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * vpc_name
   */
  attributePath?: string;
  /**
   * @remarks
   * The server-side state value.
   * 
   * @example
   * test_remote
   */
  remoteValue?: string;
  /**
   * @remarks
   * The template-declared value.
   * 
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
  /**
   * @remarks
   * The collection of attribute changes.
   */
  attributeChanges?: GetTerraformStateDetectionResponseBodyJobChangedResourcesAttributeChanges[];
  /**
   * @remarks
   * The change type.
   * 
   * @example
   * create
   */
  changedType?: string;
  /**
   * @remarks
   * Indicates whether resource drift exists.
   * 
   * @example
   * false
   */
  hasDrift?: boolean;
  /**
   * @remarks
   * The Terraform resource ID.
   * 
   * @example
   * vpc-axxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The identifier of the resource in the Terraform template. For a Stack task, the value is in the format of <$componetName>:<$resourceName>. For a Task task, the value is <$resourceName>.
   * 
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
   * @remarks
   * The attribute name.
   * 
   * @example
   * vpc_name
   */
  attributePath?: string;
  /**
   * @remarks
   * The server-side state value.
   * 
   * @example
   * test_remote
   */
  remoteValue?: string;
  /**
   * @remarks
   * The value stored in the state file.
   * 
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
  /**
   * @remarks
   * The collection of attribute drifts.
   */
  attributeDrifts?: GetTerraformStateDetectionResponseBodyJobDriftedResourcesAttributeDrifts[];
  /**
   * @remarks
   * The drift type.
   * 
   * @example
   * update
   */
  driftedType?: string;
  /**
   * @remarks
   * The Terraform resource ID.
   * 
   * @example
   * vpc-bxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The identifier of the resource in the Terraform template. For a Stack task, the value is in the format of <$componetName>:<$resourceName>. For a Task task, the value is <$resourceName>.
   * 
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
  /**
   * @remarks
   * The collection of resources with state changes.
   */
  changedResources?: GetTerraformStateDetectionResponseBodyJobChangedResources[];
  /**
   * @remarks
   * The collection of resources with state drift.
   */
  driftedResources?: GetTerraformStateDetectionResponseBodyJobDriftedResources[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * planned failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task identifier. For a Stack task, the value is in the format of <$stackId>:<$deploymentName>. For a Task task, the value is <$TaskId>.
   * 
   * @example
   * stack-as181axxxxxx:development_xxxx
   */
  identifier?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - Pending: the initial status after the job is created.
   * - PlanQueued: the job is queued because no containers are available after the job is created.
   * - Planning: the resource job is in the Plan execution phase.
   * - Planned: the resource job has completed the Plan execution.
   * - PlannedAndFinished: no differences are found after the Plan execution is complete. The job is in a final status.
   * - Errored: the job execution encountered an error and entered a final status.
   * 
   * @example
   * Errored
   */
  status?: string;
  /**
   * @remarks
   * The task type.
   * 
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
  /**
   * @remarks
   * The job details.
   */
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

