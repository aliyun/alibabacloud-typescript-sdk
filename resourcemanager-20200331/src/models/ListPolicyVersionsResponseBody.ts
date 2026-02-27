// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion extends $dara.Model {
  createDate?: string;
  isDefaultVersion?: boolean;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      isDefaultVersion: 'IsDefaultVersion',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      isDefaultVersion: 'boolean',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponseBodyPolicyVersions extends $dara.Model {
  policyVersion?: ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion[];
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: { 'type': 'array', 'itemType': ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion },
    };
  }

  validate() {
    if(Array.isArray(this.policyVersion)) {
      $dara.Model.validateArray(this.policyVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponseBody extends $dara.Model {
  policyVersions?: ListPolicyVersionsResponseBodyPolicyVersions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyVersions: 'PolicyVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersions: ListPolicyVersionsResponseBodyPolicyVersions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policyVersions && typeof (this.policyVersions as any).validate === 'function') {
      (this.policyVersions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

