// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronDraftRecord extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  content?: string;
  gmtCreate?: string;
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * app版本
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_VERSION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      content: 'content',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      content: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

