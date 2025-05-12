// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstantScoreRequest extends $dara.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      instance: 'instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      instance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

