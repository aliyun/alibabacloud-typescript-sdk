// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The migration ID.
   * 
   * @example
   * a3de82d7-83a4-4cca-8d1e-63f87651ce78
   */
  migrationId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationId: 'migrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The API information.
   */
  data?: MigrateApplicationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      data: MigrateApplicationResponseBodyData,
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

