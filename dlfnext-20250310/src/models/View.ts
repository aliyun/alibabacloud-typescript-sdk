// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ViewSchema } from "./ViewSchema";


export class View extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The UUID of the view.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The name of the view.
   * 
   * @example
   * view_test
   */
  name?: string;
  /**
   * @remarks
   * The owner of the view.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  owner?: string;
  /**
   * @remarks
   * The view schema.
   */
  schema?: ViewSchema;
  /**
   * @remarks
   * The time of the last update.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The user who last updated the view.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      id: 'id',
      name: 'name',
      owner: 'owner',
      schema: 'schema',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      id: 'string',
      name: 'string',
      owner: 'string',
      schema: ViewSchema,
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

