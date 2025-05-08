// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppBySwimmingLaneGroupTagRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * This parameter is required.
   * 
   * @example
   * 119
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the Microservices Engine (MSE) namespace that you want to query.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The tag.
   * 
   * This parameter is required.
   * 
   * @example
   * gray
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      groupId: 'GroupId',
      namespace: 'Namespace',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      groupId: 'number',
      namespace: 'string',
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

