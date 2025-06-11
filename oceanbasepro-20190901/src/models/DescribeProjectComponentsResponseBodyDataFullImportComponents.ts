// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectComponentsResponseBodyDataFullImportComponentsErrorDetails } from "./DescribeProjectComponentsResponseBodyDataFullImportComponentsErrorDetails";


export class DescribeProjectComponentsResponseBodyDataFullImportComponents extends $dara.Model {
  errorDetails?: DescribeProjectComponentsResponseBodyDataFullImportComponentsErrorDetails[];
  /**
   * @example
   * 2023-07-13T18:04:36
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-07-13T18:04:36
   */
  gmtModify?: string;
  /**
   * @example
   * p_4w8v****
   */
  identity?: string;
  /**
   * @example
   * xxx.xxx.xxx.1
   */
  ip?: string;
  /**
   * @example
   * xxx.xxx.xxx.1-9000:connector_v2:np_4w8v****c-full_trans-1-0:0000000276
   */
  name?: string;
  /**
   * @example
   * 90
   */
  progress?: number;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorDetails: 'ErrorDetails',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      identity: 'Identity',
      ip: 'Ip',
      name: 'Name',
      progress: 'Progress',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataFullImportComponentsErrorDetails },
      gmtCreate: 'string',
      gmtModify: 'string',
      identity: 'string',
      ip: 'string',
      name: 'string',
      progress: 'number',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

