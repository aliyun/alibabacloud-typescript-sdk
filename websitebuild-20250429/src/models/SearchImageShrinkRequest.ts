// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageShrinkRequest extends $dara.Model {
  /**
   * @example
   * #B0B0B0
   */
  colorHex?: string;
  hasPerson?: boolean;
  /**
   * @example
   * WindowsWithMssqlStdLicense
   */
  imageCategory?: string;
  /**
   * @example
   * 16:9
   */
  imageRatio?: string;
  /**
   * @example
   * 4000
   */
  maxHeight?: number;
  /**
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @example
   * 4000
   */
  maxWidth?: number;
  /**
   * @example
   * 500
   */
  minHeight?: number;
  /**
   * @example
   * 500
   */
  minWidth?: number;
  /**
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
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 0
   */
  start?: number;
  tagsShrink?: string;
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
      tagsShrink: 'Tags',
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
      tagsShrink: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

