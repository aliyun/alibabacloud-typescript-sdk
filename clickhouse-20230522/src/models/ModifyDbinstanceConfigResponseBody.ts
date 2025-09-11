// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * cc-uf6lkzf*****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConfigResponseBody extends $dara.Model {
  data?: ModifyDBInstanceConfigResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 05321590-BB65-4720-8C***********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyDBInstanceConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

