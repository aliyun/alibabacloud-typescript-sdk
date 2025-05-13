// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The UID of the namespace.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespaceUid?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceUid: 'NamespaceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

