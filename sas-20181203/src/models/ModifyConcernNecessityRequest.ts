// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConcernNecessityRequest extends $dara.Model {
  /**
   * @remarks
   * The list of vulnerability fix necessity levels.
   * 
   * - asap: High
   * 
   * - later: Medium
   * 
   * - nntf: Low
   * 
   * @example
   * asap,nntf
   */
  concernNecessity?: string;
  static names(): { [key: string]: string } {
    return {
      concernNecessity: 'ConcernNecessity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concernNecessity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

