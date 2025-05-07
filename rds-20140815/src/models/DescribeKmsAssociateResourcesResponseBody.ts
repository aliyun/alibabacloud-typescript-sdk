// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances } from "./DescribeKmsAssociateResourcesResponseBodyAssociateDbinstances";


export class DescribeKmsAssociateResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the associated ApsaraDB RDS instances.
   */
  associateDBInstances?: DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances[];
  /**
   * @remarks
   * Indicates whether an associated RDS instance exists.
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * true
   */
  associateStatus?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      associateDBInstances: 'AssociateDBInstances',
      associateStatus: 'AssociateStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateDBInstances: { 'type': 'array', 'itemType': DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances },
      associateStatus: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associateDBInstances)) {
      $dara.Model.validateArray(this.associateDBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

