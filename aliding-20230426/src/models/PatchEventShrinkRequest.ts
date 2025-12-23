// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchEventShrinkRequest extends $dara.Model {
  attendeesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * primary
   */
  calendarId?: string;
  cardInstancesShrink?: string;
  description?: string;
  endShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * iiiP35sJadba8aBSgjrwPRKgiEiF
   */
  eventId?: string;
  extraShrink?: string;
  /**
   * @example
   * true
   */
  isAllDay?: boolean;
  locationShrink?: string;
  recurrenceShrink?: string;
  remindersShrink?: string;
  startShrink?: string;
  summary?: string;
  categoriesShrink?: string;
  freeBusyStatus?: string;
  onlineMeetingInfoShrink?: string;
  richTextDescriptionShrink?: string;
  uiConfigsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      attendeesShrink: 'Attendees',
      calendarId: 'CalendarId',
      cardInstancesShrink: 'CardInstances',
      description: 'Description',
      endShrink: 'End',
      eventId: 'EventId',
      extraShrink: 'Extra',
      isAllDay: 'IsAllDay',
      locationShrink: 'Location',
      recurrenceShrink: 'Recurrence',
      remindersShrink: 'Reminders',
      startShrink: 'Start',
      summary: 'Summary',
      categoriesShrink: 'categories',
      freeBusyStatus: 'freeBusyStatus',
      onlineMeetingInfoShrink: 'onlineMeetingInfo',
      richTextDescriptionShrink: 'richTextDescription',
      uiConfigsShrink: 'uiConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendeesShrink: 'string',
      calendarId: 'string',
      cardInstancesShrink: 'string',
      description: 'string',
      endShrink: 'string',
      eventId: 'string',
      extraShrink: 'string',
      isAllDay: 'boolean',
      locationShrink: 'string',
      recurrenceShrink: 'string',
      remindersShrink: 'string',
      startShrink: 'string',
      summary: 'string',
      categoriesShrink: 'string',
      freeBusyStatus: 'string',
      onlineMeetingInfoShrink: 'string',
      richTextDescriptionShrink: 'string',
      uiConfigsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

