// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeSQLLineageResponseBodyLineageResultObjectMetadataFields extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * dmstest.a.id
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

