// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDataSet2Request extends $dara.Model {
  clientId?: number;
  dataSetId?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      dataSetId: 'dataSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      dataSetId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

