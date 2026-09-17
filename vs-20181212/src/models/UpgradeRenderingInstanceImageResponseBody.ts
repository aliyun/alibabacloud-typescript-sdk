// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeRenderingInstanceImageResponseBodyFailedItems extends $dara.Model {
  /**
   * @remarks
   * The error code of the failure.
   * 
   * @example
   * 200302
   */
  errCode?: string;
  /**
   * @remarks
   * The error message of the failure.
   * 
   * @example
   * Not Applied
   */
  errMessage?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-072da95539d3402da90353b244191722
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeRenderingInstanceImageResponseBodySuccessItems extends $dara.Model {
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-1ada8cd82783407b99fa202826fc6447
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeRenderingInstanceImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of failed instances.
   * 
   * @example
   * 1
   */
  failedCount?: number;
  /**
   * @remarks
   * The information about failed instances.
   */
  failedItems?: UpgradeRenderingInstanceImageResponseBodyFailedItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The number of successful instances.
   * 
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @remarks
   * The information about successful instances.
   */
  successItems?: UpgradeRenderingInstanceImageResponseBodySuccessItems[];
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      failedItems: 'FailedItems',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      successItems: 'SuccessItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      failedItems: { 'type': 'array', 'itemType': UpgradeRenderingInstanceImageResponseBodyFailedItems },
      requestId: 'string',
      successCount: 'number',
      successItems: { 'type': 'array', 'itemType': UpgradeRenderingInstanceImageResponseBodySuccessItems },
    };
  }

  validate() {
    if(Array.isArray(this.failedItems)) {
      $dara.Model.validateArray(this.failedItems);
    }
    if(Array.isArray(this.successItems)) {
      $dara.Model.validateArray(this.successItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

