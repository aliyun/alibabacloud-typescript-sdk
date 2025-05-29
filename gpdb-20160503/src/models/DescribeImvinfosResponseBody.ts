// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIMVInfosResponseBodyImvInfos } from "./DescribeImvinfosResponseBodyImvInfos";


export class DescribeIMVInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The queried materialized views.
   */
  imvInfos?: DescribeIMVInfosResponseBodyImvInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      imvInfos: 'ImvInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      imvInfos: { 'type': 'array', 'itemType': DescribeIMVInfosResponseBodyImvInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imvInfos)) {
      $dara.Model.validateArray(this.imvInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

