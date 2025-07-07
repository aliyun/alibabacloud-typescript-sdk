// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountQueryLoginSettingsRequest extends $dara.Model {
  appName?: string;
  isOpenApi?: boolean;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  pk?: string;
  showCompleteInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      isOpenApi: 'IsOpenApi',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      pk: 'Pk',
      showCompleteInfo: 'ShowCompleteInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      isOpenApi: 'boolean',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      pk: 'string',
      showCompleteInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

