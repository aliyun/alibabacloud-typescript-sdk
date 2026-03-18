// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo extends $dara.Model {
  content?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      strategyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos extends $dara.Model {
  switchInfo?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo[];
  static names(): { [key: string]: string } {
    return {
      switchInfo: 'SwitchInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchInfo: { 'type': 'array', 'itemType': PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo },
    };
  }

  validate() {
    if(Array.isArray(this.switchInfo)) {
      $dara.Model.validateArray(this.switchInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreview extends $dara.Model {
  instanceId?: string;
  name?: string;
  switchInfos?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos;
  userDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      switchInfos: 'SwitchInfos',
      userDomainName: 'UserDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      switchInfos: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos,
      userDomainName: 'string',
    };
  }

  validate() {
    if(this.switchInfos && typeof (this.switchInfos as any).validate === 'function') {
      (this.switchInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBodyPreviews extends $dara.Model {
  preview?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreview[];
  static names(): { [key: string]: string } {
    return {
      preview: 'Preview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preview: { 'type': 'array', 'itemType': PreviewGtmRecoveryPlanResponseBodyPreviewsPreview },
    };
  }

  validate() {
    if(Array.isArray(this.preview)) {
      $dara.Model.validateArray(this.preview);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  previews?: PreviewGtmRecoveryPlanResponseBodyPreviews;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 853805EA-3D47-47D5-9A1A-A45C24313ABD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned on all pages.
   * 
   * @example
   * 15
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 3
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      previews: 'Previews',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      previews: PreviewGtmRecoveryPlanResponseBodyPreviews,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.previews && typeof (this.previews as any).validate === 'function') {
      (this.previews as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

