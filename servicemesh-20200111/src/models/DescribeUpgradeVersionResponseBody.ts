// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpgradeVersionResponseBodyVersion extends $dara.Model {
  /**
   * @remarks
   * The version of the ASM instance.
   * 
   * @example
   * v1.17.2.42-gf7619883-aliyun
   */
  istioOperatorVersion?: string;
  /**
   * @remarks
   * The Istio version.
   * 
   * @example
   * 1.17.2
   */
  istioVersion?: string;
  /**
   * @remarks
   * The Kubernetes version.
   * 
   * @example
   * v1.24.6-aliyun.1
   */
  kubernetesVersion?: string;
  static names(): { [key: string]: string } {
    return {
      istioOperatorVersion: 'IstioOperatorVersion',
      istioVersion: 'IstioVersion',
      kubernetesVersion: 'KubernetesVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioOperatorVersion: 'string',
      istioVersion: 'string',
      kubernetesVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11fd0027-c27e-41bb-a565-75583054****
   */
  requestId?: string;
  /**
   * @remarks
   * The version information.
   */
  version?: DescribeUpgradeVersionResponseBodyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: DescribeUpgradeVersionResponseBodyVersion,
    };
  }

  validate() {
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

