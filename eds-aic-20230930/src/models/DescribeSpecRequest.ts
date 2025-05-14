// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpecRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The matrix specification.
   * 
   * Valid values:
   * 
   * *   cpm.gn6.gx1
   * 
   * @example
   * cpm.gn6.gx1
   */
  matrixSpec?: string;
  /**
   * @remarks
   * The maximum number of items to return per page in a paginated query. The value range is 1 to 100, with a default value of 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates the starting position for reading. If left empty, it starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The purchase mode of cloud mobile phones.
   * 
   * Valid values:
   * 
   * *   Instance (default): the instance group mode.
   * *   Node: the matrix mode [whitelisted].
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * List of specification IDs.
   */
  specIds?: string[];
  /**
   * @remarks
   * Specification status.
   * 
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @remarks
   * Specification type.
   * 
   * @example
   * ARM
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      matrixSpec: 'MatrixSpec',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      saleMode: 'SaleMode',
      specIds: 'SpecIds',
      specStatus: 'SpecStatus',
      specType: 'SpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      matrixSpec: 'string',
      maxResults: 'number',
      nextToken: 'string',
      saleMode: 'string',
      specIds: { 'type': 'array', 'itemType': 'string' },
      specStatus: 'string',
      specType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.specIds)) {
      $dara.Model.validateArray(this.specIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

