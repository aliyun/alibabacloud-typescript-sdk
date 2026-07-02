// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKmsInstancesResponseBodyKmsInstancesKmsInstance extends $dara.Model {
  kmsInstanceArn?: string;
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceArn: 'KmsInstanceArn',
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceArn: 'string',
      kmsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponseBodyKmsInstances extends $dara.Model {
  kmsInstance?: ListKmsInstancesResponseBodyKmsInstancesKmsInstance[];
  static names(): { [key: string]: string } {
    return {
      kmsInstance: 'KmsInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstance: { 'type': 'array', 'itemType': ListKmsInstancesResponseBodyKmsInstancesKmsInstance },
    };
  }

  validate() {
    if(Array.isArray(this.kmsInstance)) {
      $dara.Model.validateArray(this.kmsInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponseBody extends $dara.Model {
  kmsInstances?: ListKmsInstancesResponseBodyKmsInstances;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of KMS instances returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * d3eca5c8-a856-4347-8eb6-e1898c3fda2e
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of KMS instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      kmsInstances: 'KmsInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstances: ListKmsInstancesResponseBodyKmsInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.kmsInstances && typeof (this.kmsInstances as any).validate === 'function') {
      (this.kmsInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

