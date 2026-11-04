// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BTemplateTag extends $dara.Model {
  /**
   * @remarks
   * The ID of the template build output that this label points to, in UUID format.
   * 
   * @example
   * b7e21c05-****
   */
  buildID?: string;
  /**
   * @remarks
   * The creation time of the label, in UTC and RFC 3339 format.
   * 
   * @example
   * 2026-08-20T08:35:12Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * latest
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      buildID: 'buildID',
      createdAt: 'createdAt',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildID: 'string',
      createdAt: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

