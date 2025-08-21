// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneDefenseObjectsResponseBodyObjects extends $dara.Model {
  /**
   * @remarks
   * The domain name that is protected by the policy.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 47e07ebd-0ba5-4afc-957b-59d15b90****
   */
  policyId?: string;
  /**
   * @remarks
   * The IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance that is protected by the policy.
   * 
   * @example
   * 203.XX.XX.119
   */
  vip?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policyId: 'PolicyId',
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policyId: 'string',
      vip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefenseObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the protected assets.
   */
  objects?: DescribeSceneDefenseObjectsResponseBodyObjects[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE07E73F-F19E-4A51-B62F-AC59E3B962D8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      objects: 'Objects',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objects: { 'type': 'array', 'itemType': DescribeSceneDefenseObjectsResponseBodyObjects },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

