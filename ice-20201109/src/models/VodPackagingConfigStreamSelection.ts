// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VodPackagingConfigStreamSelection extends $dara.Model {
  maxVideoBitsPerSecond?: number;
  minVideoBitsPerSecond?: number;
  streamOrder?: string;
  static names(): { [key: string]: string } {
    return {
      maxVideoBitsPerSecond: 'MaxVideoBitsPerSecond',
      minVideoBitsPerSecond: 'MinVideoBitsPerSecond',
      streamOrder: 'StreamOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxVideoBitsPerSecond: 'number',
      minVideoBitsPerSecond: 'number',
      streamOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

