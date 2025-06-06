// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceDeploymentsShrinkRequest extends $dara.Model {
  /**
   * @example
   * demo
   */
  keyword?: string;
  labelSelectorShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

