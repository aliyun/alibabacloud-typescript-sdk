// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsLogStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * wafng-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * wafng-project-14316572********-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * The capacity of the Logstore. Unit: bytes.
   * 
   * @example
   * 3298534883328
   */
  quota?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CAC0A24B-486A-5E12-9894-BE860E5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The storage duration of the Logstore. Unit: days.
   * 
   * @example
   * 180
   */
  ttl?: number;
  /**
   * @remarks
   * The used capacity of the Logstore. Unit: bytes.
   * 
   * @example
   * 35471136
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      quota: 'Quota',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      projectName: 'string',
      quota: 'number',
      requestId: 'string',
      ttl: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

