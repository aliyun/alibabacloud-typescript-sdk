// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpaClusterStrategyNewRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The image names.
   */
  imageName?: string[];
  /**
   * @remarks
   * The tags that are added to the container.
   */
  label?: string[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule names.
   */
  strategyName?: string[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      imageName: 'ImageName',
      label: 'Label',
      pageSize: 'PageSize',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      imageName: { 'type': 'array', 'itemType': 'string' },
      label: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      strategyName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.imageName)) {
      $dara.Model.validateArray(this.imageName);
    }
    if(Array.isArray(this.label)) {
      $dara.Model.validateArray(this.label);
    }
    if(Array.isArray(this.strategyName)) {
      $dara.Model.validateArray(this.strategyName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

