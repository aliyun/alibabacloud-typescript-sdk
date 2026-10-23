// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method. A value of PrePaid indicates subscription. A value of PostPaid indicates pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The cloud phone matrix specification.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  matrixSpec?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the position from which to start reading. An empty value indicates that the reading starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The purchasing mode of the cloud phone.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * The list of specification IDs.
   */
  specIds?: string[];
  /**
   * @remarks
   * The specification status.
   * 
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * @example
   * CPU
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
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
      chargeType: 'string',
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

