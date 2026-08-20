// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelDeploymentResourcesResponseBodyMemberMatchesDedicatedResources extends $dara.Model {
  /**
   * @example
   * eas-r-lq9p****ao9m2
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDeploymentResourcesResponseBodyMemberMatchesPublicResources extends $dara.Model {
  /**
   * @example
   * ml.gx9cf.8.62xlarg
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDeploymentResourcesResponseBodyMemberMatchesQuotas extends $dara.Model {
  /**
   * @example
   * quotagn***bb68
   */
  quotaId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDeploymentResourcesResponseBodyMemberMatches extends $dara.Model {
  dedicatedResources?: GetModelDeploymentResourcesResponseBodyMemberMatchesDedicatedResources[];
  /**
   * @example
   * Default
   */
  memberType?: string;
  publicResources?: GetModelDeploymentResourcesResponseBodyMemberMatchesPublicResources[];
  quotas?: GetModelDeploymentResourcesResponseBodyMemberMatchesQuotas[];
  static names(): { [key: string]: string } {
    return {
      dedicatedResources: 'DedicatedResources',
      memberType: 'MemberType',
      publicResources: 'PublicResources',
      quotas: 'Quotas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedResources: { 'type': 'array', 'itemType': GetModelDeploymentResourcesResponseBodyMemberMatchesDedicatedResources },
      memberType: 'string',
      publicResources: { 'type': 'array', 'itemType': GetModelDeploymentResourcesResponseBodyMemberMatchesPublicResources },
      quotas: { 'type': 'array', 'itemType': GetModelDeploymentResourcesResponseBodyMemberMatchesQuotas },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedResources)) {
      $dara.Model.validateArray(this.dedicatedResources);
    }
    if(Array.isArray(this.publicResources)) {
      $dara.Model.validateArray(this.publicResources);
    }
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDeploymentResourcesResponseBody extends $dara.Model {
  memberMatches?: GetModelDeploymentResourcesResponseBodyMemberMatches[];
  /**
   * @example
   * B6B54325-C98C-5937-87A3-2F96C07652EC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      memberMatches: 'MemberMatches',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberMatches: { 'type': 'array', 'itemType': GetModelDeploymentResourcesResponseBodyMemberMatches },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberMatches)) {
      $dara.Model.validateArray(this.memberMatches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

