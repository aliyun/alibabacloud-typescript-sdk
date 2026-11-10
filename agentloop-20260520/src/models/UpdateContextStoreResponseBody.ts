// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextStoreResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether runtime recall is allowed after the experience library is updated.
   */
  runtimeRecallEnabled?: boolean;
  /**
   * @remarks
   * The runtime recall property version that takes effect after this update.
   * 
   * @example
   * 1
   */
  runtimeRecallRevision?: number;
  static names(): { [key: string]: string } {
    return {
      runtimeRecallEnabled: 'runtimeRecallEnabled',
      runtimeRecallRevision: 'runtimeRecallRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runtimeRecallEnabled: 'boolean',
      runtimeRecallRevision: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContextStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration properties after updating the runtime recall switch. This block is not returned for other library update operations.
   */
  config?: UpdateContextStoreResponseBodyConfig;
  /**
   * @remarks
   * The request ID. You can use this ID to locate the request when troubleshooting issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The strategy version number that takes effect after the update for the memory type. If the strategy remains unchanged, the version number is the same as before the update.
   * 
   * @example
   * 2
   */
  strategyVersion?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      requestId: 'requestId',
      strategyVersion: 'strategyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateContextStoreResponseBodyConfig,
      requestId: 'string',
      strategyVersion: 'number',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

