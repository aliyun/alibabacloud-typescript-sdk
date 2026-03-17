// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartAGApiUnsupportedFeatureResponseBodyFeatures extends $dara.Model {
  /**
   * @remarks
   * The unsupported feature.
   * 
   * For more information about the description of each feature, see the related API reference.
   * 
   * @example
   * ISP
   */
  feature?: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGApiUnsupportedFeatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of unsupported features.
   */
  features?: ListSmartAGApiUnsupportedFeatureResponseBodyFeatures[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7459545D-2F0D-43E6-9957-CB7E0223332B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': ListSmartAGApiUnsupportedFeatureResponseBodyFeatures },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

