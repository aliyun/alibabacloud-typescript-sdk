// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConcernNecessityRequest extends $dara.Model {
  /**
   * @remarks
   * The priorities to fix the vulnerabilities. Valid values:
   * 
   * *   asap: high
   * *   later: medium
   * *   nntf: low
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

