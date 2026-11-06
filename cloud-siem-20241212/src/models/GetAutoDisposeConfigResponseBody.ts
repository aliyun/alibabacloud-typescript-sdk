// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoDisposeConfigResponseBodyAutoDisposeConfig extends $dara.Model {
  /**
   * @remarks
   * The automatic disposal switch. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  autoDecisionStatus?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      autoDecisionStatus: 'AutoDecisionStatus',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDecisionStatus: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoDisposeConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The automatic disposal configuration for users.
   */
  autoDisposeConfig?: GetAutoDisposeConfigResponseBodyAutoDisposeConfig;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoDisposeConfig: 'AutoDisposeConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDisposeConfig: GetAutoDisposeConfigResponseBodyAutoDisposeConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.autoDisposeConfig && typeof (this.autoDisposeConfig as any).validate === 'function') {
      (this.autoDisposeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

