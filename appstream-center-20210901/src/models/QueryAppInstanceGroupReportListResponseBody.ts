// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppInstanceGroupReportListResponseBodyIndexData extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name.
   * 
   * @example
   * R&D workstation group
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The current status of the delivery group.
   * 
   * Valid values:
   * 
   * - `DEPLOYING`: Deploying.
   * - `DEPLOYED`: Deployed but not published.
   * - `PUBLISHED`: Published and available for service based on the current configuration.
   * - `STOPPING`: Stopping.
   * - `STOPPED`: Stopped.
   * - `MAINTAINING`: Maintaining.
   * - `FAILED`: Deployment or operation failed.
   * - `MAINTAIN_FAILED`: Maintenance failed.
   * - `DELETING`: Deleting.
   * - `DELETED`: Deleted.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppInstanceGroupReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. `200` indicates that the request is processed successfully. Other values indicate that the processing failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of delivery group report data.
   */
  indexData?: QueryAppInstanceGroupReportListResponseBodyIndexData[];
  /**
   * @remarks
   * The description of the request processing result. `success` is usually returned when the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number corresponding to the current response.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page used in the current response.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the current request, which can be used to troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      indexData: 'IndexData',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      indexData: { 'type': 'array', 'itemType': QueryAppInstanceGroupReportListResponseBodyIndexData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexData)) {
      $dara.Model.validateArray(this.indexData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

