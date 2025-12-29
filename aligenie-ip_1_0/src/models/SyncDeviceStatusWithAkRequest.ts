// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDeviceStatusWithAkRequest extends $dara.Model {
  categoryCnName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * light
   */
  categoryEnName?: string;
  deviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room
   */
  location?: string;
  locationCnName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bedLight
   */
  number?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  switch?: number;
  fanSpeed?: string;
  mode?: string;
  roomTemperature?: string;
  temperature?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCnName: 'CategoryCnName',
      categoryEnName: 'CategoryEnName',
      deviceName: 'DeviceName',
      hotelId: 'HotelId',
      location: 'Location',
      locationCnName: 'LocationCnName',
      number: 'Number',
      roomNo: 'RoomNo',
      switch: 'Switch',
      fanSpeed: 'fanSpeed',
      mode: 'mode',
      roomTemperature: 'roomTemperature',
      temperature: 'temperature',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCnName: 'string',
      categoryEnName: 'string',
      deviceName: 'string',
      hotelId: 'string',
      location: 'string',
      locationCnName: 'string',
      number: 'string',
      roomNo: 'string',
      switch: 'number',
      fanSpeed: 'string',
      mode: 'string',
      roomTemperature: 'string',
      temperature: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

