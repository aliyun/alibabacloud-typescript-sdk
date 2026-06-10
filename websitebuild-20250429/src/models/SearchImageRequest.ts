// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageRequest extends $dara.Model {
  /**
   * @remarks
   * Color
   * 
   * @example
   * #B0B0B0
   */
  colorHex?: string;
  /**
   * @remarks
   * Indicates whether the image contains a person.
   * 
   * @example
   * false
   */
  hasPerson?: boolean;
  /**
   * @remarks
   * Image category. Valid values:
   * - normal: Illustrations or article images.
   * - banner: Background images or image carousels.
   * - goods: Product or service images.
   * 
   * @example
   * WindowsWithMssqlStdLicense
   */
  imageCategory?: string;
  /**
   * @remarks
   * Image aspect ratio, including:
   * "16:9"
   * "4:3"
   * "2:1"
   * "1:1"
   * "3:4"
   * "9:16"
   * 
   * @example
   * 16:9
   */
  imageRatio?: string;
  /**
   * @remarks
   * Maximum image height.
   * 
   * @example
   * 4000
   */
  maxHeight?: number;
  /**
   * @remarks
   * Number of items per page in a paged query. Maximum value is 100. Default value is 20.
   * 
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @remarks
   * Maximum image width (inclusive).
   * 
   * @example
   * 4000
   */
  maxWidth?: number;
  /**
   * @remarks
   * Minimum image height
   * 
   * @example
   * 500
   */
  minHeight?: number;
  /**
   * @remarks
   * Minimum image width (inclusive).
   * 
   * @example
   * 500
   */
  minWidth?: number;
  /**
   * @remarks
   * Query credential (Token). Set this parameter to the NextToken value returned in the previous API call. You do not need to set this parameter for the initial API call. If NextToken is specified, the request parameters PageSize and PageNumber become invalid, and the TotalCount in the returned data is also invalid.
   * 
   * @example
   * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
   */
  nextToken?: string;
  /**
   * @remarks
   * Osskey。
   * 
   * @example
   * backend/detection/objects/r-0008ujvfksltf5j45n81/task-000hckiuwyau0gwn17vq.jpg
   */
  ossKey?: string;
  /**
   * @remarks
   * Number of results to return. Default value is 10.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Starting position of the return result. Valid values: 0 to 499. Default value is 0.
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * Tags.
   */
  tags?: string[];
  /**
   * @remarks
   * Description text for searching images.
   * 
   * > Supports up to 512 characters.
   * 
   * @example
   * 卫浴五金产品，表面采用拉丝不锈钢材质，整体色调为现代银灰色，呈现简约且富有质感的风格。产品包括淋浴花洒、水龙头及毛巾架等配件，均具备防锈、耐腐蚀性能，适用于潮湿环境。各部件连接处设计精密，配有隐藏式螺丝结构，提升整体美观度。水龙头和花洒喷头支持多模式出水，把手操作顺滑，符合人体工学设计。所有五金件通过国家节水认证，支持冷热水接入，安装方式为壁挂式。
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      colorHex: 'ColorHex',
      hasPerson: 'HasPerson',
      imageCategory: 'ImageCategory',
      imageRatio: 'ImageRatio',
      maxHeight: 'MaxHeight',
      maxResults: 'MaxResults',
      maxWidth: 'MaxWidth',
      minHeight: 'MinHeight',
      minWidth: 'MinWidth',
      nextToken: 'NextToken',
      ossKey: 'OssKey',
      size: 'Size',
      start: 'Start',
      tags: 'Tags',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorHex: 'string',
      hasPerson: 'boolean',
      imageCategory: 'string',
      imageRatio: 'string',
      maxHeight: 'number',
      maxResults: 'number',
      maxWidth: 'number',
      minHeight: 'number',
      minWidth: 'number',
      nextToken: 'string',
      ossKey: 'string',
      size: 'number',
      start: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

