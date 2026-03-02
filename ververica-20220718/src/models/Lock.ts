// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Lock extends $dara.Model {
  /**
   * @remarks
   * The ID of the lock holder.
   * 
   * @example
   * 18389966****
   */
  holderId?: string;
  /**
   * @remarks
   * The username of the lock holder.
   * 
   * @example
   * userA
   */
  holderName?: string;
  /**
   * @remarks
   * The lock ID.
   * 
   * @example
   * stt-fu1658tbk6mnkk2****
   */
  id?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      holderId: 'holderId',
      holderName: 'holderName',
      id: 'id',
      namespace: 'namespace',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holderId: 'string',
      holderName: 'string',
      id: 'string',
      namespace: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

