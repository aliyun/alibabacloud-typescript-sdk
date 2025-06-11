// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The categories of the Flow.
   */
  categories?: string[];
  /**
   * @remarks
   * The version number of the API.
   * 
   * @example
   * 3.0
   */
  dataApiVersion?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * flow_id_arms
   */
  flowId?: string;
  /**
   * @remarks
   * The Flow name.
   * 
   * @example
   * dnjn
   */
  flowName?: string;
  /**
   * @remarks
   * The JSON version.
   * 
   * @example
   * 2.1
   */
  JSONVersion?: string;
  /**
   * @remarks
   * The temporary preview URL.
   * 
   * @example
   * https://pre-url
   */
  previewUrl?: string;
  /**
   * @remarks
   * The time when the preview URL expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1700617436633
   */
  previewUrlExpires?: number;
  /**
   * @remarks
   * The state of the Flow.
   * 
   * Valid values:
   * 
   * *   PUBLISHED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DRAFT
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DEPRECATED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      dataApiVersion: 'DataApiVersion',
      flowId: 'FlowId',
      flowName: 'FlowName',
      JSONVersion: 'JSONVersion',
      previewUrl: 'PreviewUrl',
      previewUrlExpires: 'PreviewUrlExpires',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      dataApiVersion: 'string',
      flowId: 'string',
      flowName: 'string',
      JSONVersion: 'string',
      previewUrl: 'string',
      previewUrlExpires: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

