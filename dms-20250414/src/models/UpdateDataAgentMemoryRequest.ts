// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAgentMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The memory content.
   * 
   * @example
   * Diamond pricing analysis requires examining the skewness and outliers of the distribution of each feature.
   */
  content?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The source ID.
   * - If MemFrom is set to session, FromId indicates the session ID.
   * - If MemFrom is set to user, FromId indicates the RAM user ID.
   * 
   * @example
   * 8zm3**********g3yxa1
   */
  fromId?: string;
  /**
   * @remarks
   * The memory source. Valid values:
   * 
   * - session: generated from a session.
   * - user: edited by a user.
   * 
   * @example
   * user
   */
  memFrom?: string;
  /**
   * @remarks
   * The memory UUID.
   * 
   * @example
   * ed3f67***********ed
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      DMSUnit: 'DMSUnit',
      fromId: 'FromId',
      memFrom: 'MemFrom',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      DMSUnit: 'string',
      fromId: 'string',
      memFrom: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

