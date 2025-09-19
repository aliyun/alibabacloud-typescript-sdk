// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerServiceK8sClusterKritisStatusResponseBodyKritisStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Kritis is installed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  install?: boolean;
  static names(): { [key: string]: string } {
    return {
      install: 'Install',
    };
  }

  static types(): { [key: string]: any } {
    return {
      install: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerServiceK8sClusterKritisStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Kritis status of the ACK cluster.
   */
  kritisStatus?: DescribeContainerServiceK8sClusterKritisStatusResponseBodyKritisStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578AB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kritisStatus: 'KritisStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kritisStatus: DescribeContainerServiceK8sClusterKritisStatusResponseBodyKritisStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.kritisStatus && typeof (this.kritisStatus as any).validate === 'function') {
      (this.kritisStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

